import type * as monaco from 'monaco-editor';
import bigquery from './bigquery-snippets'
type Monaco = typeof monaco;

/** String identifier like 'cpp' or 'java'. */
export type LanguageId = string;

export type LanguageInfo = {
  tokensProvider: monaco.languages.EncodedTokensProvider | null;
  configuration: monaco.languages.LanguageConfiguration | null;
};

/**
 * This function needs to be called before monaco.editor.create().
 *
 * @param languages the set of languages Monaco must know about up front.
 * @param fetchLanguageInfo fetches full language configuration on demand.
 * @param monaco instance of Monaco on which to register languages information.
 */
export function registerLanguages(
  languages: monaco.languages.ILanguageExtensionPoint[],
  fetchLanguageInfo: (language: LanguageId) => Promise<LanguageInfo>,
  monaco: Monaco,
) {
  function createDependencyProposals(range: any) {
    // returning a static list of proposals, not even looking at the prefix (filtering is done by the Monaco editor),
    // here you could do a server side lookup

    return Object.entries(bigquery).map(([key, value]) => {
      const body = typeof value.body === 'string' ? value.body : value.body.join("\n");
      const description = (value as any).description;

      return {
        label: typeof value.prefix === 'string' ? value.prefix : value.prefix[0],
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: body,
        documentation: `${description ? `${description}\n\n` : ''}${body}`,
        detail: key,
        range: range,
      }
    })
  }

  // We have to register all of the languages with Monaco synchronously before
  // we can configure them.
  for (const extensionPoint of languages) {
    // Recall that the id is a short name like 'cpp' or 'java'.
    const {id: languageId} = extensionPoint;
    monaco.languages.register(extensionPoint);

    // Lazy-load the tokens provider and configuration data.
    monaco.languages.onLanguage(languageId, async () => {
      const {tokensProvider, configuration} = await fetchLanguageInfo(languageId);

      if (tokensProvider != null) {
        monaco.languages.setTokensProvider(languageId, tokensProvider);
      }

      if (configuration != null) {
        monaco.languages.setLanguageConfiguration(languageId, configuration);
      }

      monaco.languages.registerCompletionItemProvider('bigquery', {
        provideCompletionItems: function (model, position) {
          var word = model.getWordUntilPosition(position);
          var range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
          };
          return {
            suggestions: createDependencyProposals(range)
          };
        }
      });
    });
  }
}

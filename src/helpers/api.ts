type FormatRequestUrlProps = {
  baseUrl: string;
  idKey: string;
  idValue: string;
};

/**
 * Formata a URL da requisição.
 *
 * @param {FormatRequestUrlProps} props As propriedades da função.
 * @param {string} props.baseUrl A URL base da requisição.
 * @param {string} props.idKey A chave do ID na URL.
 * @param {string} props.idValue O valor do ID na URL.
 *
 * @returns {string} A URL formatada da requisição.
 */
export const formatRequestUrl = ({
  baseUrl,
  idKey,
  idValue,
}: FormatRequestUrlProps) => baseUrl.replace(`:${idKey}`, idValue);

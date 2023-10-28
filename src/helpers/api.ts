type FormatRequestUrlProps = {
  baseUrl: string;
  idKey: string;
  idValue: string;
};

export const formatRequestUrl = ({
  baseUrl,
  idKey,
  idValue,
}: FormatRequestUrlProps) => baseUrl.replace(`:${idKey}`, idValue);

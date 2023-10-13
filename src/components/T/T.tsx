import { TextKeyArg, useLanguageContext } from '@context/LanguageContext';
import { TextKey } from '@types';

type TProps = {
  textKey: TextKey;
  as?: keyof JSX.IntrinsicElements;
  args?: TextKeyArg[];
};

export const T = (props: TProps): JSX.Element => {
  const { textKey, as: CustomTag = 'span', args } = props;

  const { translate: t } = useLanguageContext();

  return <CustomTag>{t(textKey, args)}</CustomTag>;
};

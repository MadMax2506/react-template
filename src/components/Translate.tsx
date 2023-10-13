import { TextKeyArg, useLanguageContext } from '@context/LanguageContext';
import { TextKey } from '@types';

type TranslateProps = {
  textKey: TextKey;
  as?: keyof JSX.IntrinsicElements;
  args?: TextKeyArg[];
};

export const Translate = (props: TranslateProps): JSX.Element => {
  const { textKey, as: CustomTag = 'span', args } = props;

  const { translate } = useLanguageContext();

  return <CustomTag>{translate(textKey, args)}</CustomTag>;
};

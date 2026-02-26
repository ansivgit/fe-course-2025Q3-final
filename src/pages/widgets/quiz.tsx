import { QuizIcon } from '@/assets/icons';
import { WidgetPage } from '@/pages/widgets/widget';
import { parseWidgets } from '@/services/widgets/engine';
import { quizStrategy } from '@/services/widgets/strategy';

import type { ReactElement } from 'react';
import widgetsData from '../../../data/widgets/quiz.json';

export const Quiz = (): ReactElement => {
  const [widget] = parseWidgets(widgetsData);

  return (
    <WidgetPage
      widgetsData={widgetsData}
      widget={widget}
      title="JavaScript Quiz"
      Icon={QuizIcon}
      completionText="Congratulations! You have completed the quiz!"
      strategies={[quizStrategy]}
    />
  );
};

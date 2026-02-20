import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import type { WidgetAnswerMap } from './types/widgets';

declare global {
  // added to the global scope for testing the widget in the console
  var answerWidget: (widgetId: string, answer: WidgetAnswerMap[keyof WidgetAnswerMap]) => void;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

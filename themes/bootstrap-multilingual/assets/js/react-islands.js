// React 19 Island Hydration Script for Hugo
// Runs directly in modern browsers via ESM - zero local npm install required!
document.addEventListener('DOMContentLoaded', async () => {
  const containers = document.querySelectorAll('[data-react-island]');
  if (containers.length === 0) return;

  try {
    const React = await import('https://esm.sh/react@19');
    const { createRoot } = await import('https://esm.sh/react-dom@19/client');

    containers.forEach((container) => {
      const islandName = container.getAttribute('data-react-island');
      if (islandName === 'TechStackFilter') {
        const rawProps = container.getAttribute('data-props');
        const props = rawProps ? JSON.parse(rawProps) : { currentLang: 'uk' };

        const labels = {
          all: { uk: 'Всі стеки', en: 'All Stacks', ru: 'Все стеки' },
          frontend: { uk: 'React / Frontend', en: 'React / Frontend', ru: 'React / Frontend' },
          backend: { uk: 'Go / Backend', en: 'Go / Backend', ru: 'Go / Backend' },
          ai: { uk: 'Python / AI', en: 'Python / AI', ru: 'Python / AI' },
        };

        function FilterComponent() {
          const [active, setActive] = React.useState('all');
          const lang = props.currentLang || 'uk';

          return React.createElement(
            'div',
            { className: 'p-3 bg-body border rounded-3 shadow-sm mb-4' },
            React.createElement(
              'div',
              { className: 'd-flex align-items-center gap-2 mb-2' },
              React.createElement(
                'span',
                { className: 'badge bg-primary-subtle text-primary border border-primary-subtle' },
                'React 19 Island'
              ),
              React.createElement(
                'span',
                { className: 'text-secondary small' },
                'Interactive Filter Component'
              )
            ),
            React.createElement(
              'div',
              { className: 'btn-group btn-group-sm flex-wrap' },
              Object.keys(labels).map((key) =>
                React.createElement(
                  'button',
                  {
                    key,
                    type: 'button',
                    className: 'btn ' + (active === key ? 'btn-primary' : 'btn-outline-secondary'),
                    onClick: () => setActive(key),
                  },
                  (labels[key] && labels[key][lang]) || labels[key]['en']
                )
              )
            )
          );
        }

        const root = createRoot(container);
        root.render(React.createElement(FilterComponent));
      }
    });
  } catch (err) {
    console.warn('React Island hydration deferred:', err);
  }
});

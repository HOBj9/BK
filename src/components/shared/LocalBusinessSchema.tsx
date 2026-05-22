import { useEffect } from 'react';
import { buildLocalBusinessSchema } from '../../utils/schema';

const SCRIPT_ID = 'local-business-schema';

export default function LocalBusinessSchema() {
  useEffect(() => {
    const schema = buildLocalBusinessSchema();
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);

    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, []);

  return null;
}

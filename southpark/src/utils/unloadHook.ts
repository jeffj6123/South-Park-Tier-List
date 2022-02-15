import { useState, useEffect, useRef } from 'react';

export function useOnUnload(prompt: boolean, displayText: string) {
  const [shouldPrompt, setShouldPrompt] = useState(prompt);

  const offSetRef = useRef(shouldPrompt);
  offSetRef.current = shouldPrompt;

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser)
    return () => {
      window.removeEventListener('beforeunload', alertUser)
    }
  }, [])

  const alertUser = e => {
      if(offSetRef.current) {
        e.preventDefault()
        e.returnValue = ''
        window.prompt(displayText);
      }
  }

  const setShouldPromp = (state: boolean) => {
    setShouldPrompt(state)
  }

  return [shouldPrompt, setShouldPromp] as const;
}
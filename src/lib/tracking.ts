declare global {
  interface Window {
    plausible: (eventName: string, options: any) => void // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

export type TrackOptions = {
  callback?: () => void
  props?: { [key: string]: any } // eslint-disable-line @typescript-eslint/no-explicit-any
  revenue?: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

export function trackEvent(eventName: string, eventProperties?: TrackOptions) {
  if (!window.plausible)
    console.log("Tracking event:", eventName, eventProperties)

  window.plausible(eventName, eventProperties)
}

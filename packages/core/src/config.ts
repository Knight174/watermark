import { WatermarkOptions } from './types';

export const defaultOptions: Partial<WatermarkOptions> = {
  gapX: 100,
  gapY: 100,
  offsetLeft: 0,
  offsetTop: 0,
  width: 120,
  height: 64,
  opacity: 0.15,
  rotate: -22,
  fontSize: 16,
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: '300',
  fontColor: '#000',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  textBaseline: 'alphabetic',
  monitor: true,
  zIndex: 9999,
  mode: 'interval'
}

export const attributeName = 'data-watermark';

export const observeOptions = {
  childList: true,
  subtree: true,
  attributeFilter: ['style', attributeName]
}

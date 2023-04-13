
export const BackSideCardSymbol = Symbol('BackSideCardSymbol');

export type BackSideCardSymbol = typeof BackSideCardSymbol;

export function BackSideCard({children}: {children?: number}) {
  return (<div className='back-side-card'><p>{children}</p></div>);
  // return (<div className='back-side-card'>{(children || [])[0] || ''}</div>);
}

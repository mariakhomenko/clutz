declare namespace ಠ_ಠ.clutz.implements_iterable {
  class ImplIterable implements Iterable < string > {
    private noStructuralTyping_implements_iterable_ImplIterable : any;
    [Symbol.iterator]():  Iterator < string > ;
  }
}
declare module 'goog:implements_iterable.ImplIterable' {
  import ImplIterable = ಠ_ಠ.clutz.implements_iterable.ImplIterable;
  export default ImplIterable;
}
declare namespace ಠ_ಠ.clutz.implements_iterable {
  class ImplIterableGeneric < T > implements Iterable < T > {
    private noStructuralTyping_implements_iterable_ImplIterableGeneric : any;
    [Symbol.iterator]():  Iterator < any > ;
  }
}
declare module 'goog:implements_iterable.ImplIterableGeneric' {
  import ImplIterableGeneric = ಠ_ಠ.clutz.implements_iterable.ImplIterableGeneric;
  export default ImplIterableGeneric;
}
declare namespace ಠ_ಠ.clutz.implements_iterable {
  class ImplIterableIterator implements IterableIterator < string > {
    private noStructuralTyping_implements_iterable_ImplIterableIterator : any;
    [Symbol.iterator]():  IterableIterator < string > ;
    next (a ? : any ) : IteratorResult < string > ;
  }
}
declare module 'goog:implements_iterable.ImplIterableIterator' {
  import ImplIterableIterator = ಠ_ಠ.clutz.implements_iterable.ImplIterableIterator;
  export default ImplIterableIterator;
}

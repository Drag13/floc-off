(function () {
  const cohorts = "interestCohort";
  const documentProto = Document.prototype;
  const flocSupported = cohorts in documentProto;

  if (!flocSupported) {
    return;
  }

  const descriptor = Object.getOwnPropertyDescriptor(documentProto, cohorts);
  const writable = descriptor && descriptor.writable;
  if (writable) {
    const proxy = new Proxy(documentProto[cohorts], { apply: () => Promise.reject() });
    const config = {
      writable: false,
      value: proxy,
      configurable: false,
      enumerable: false,
    };
    Object.defineProperty(documentProto, cohorts, config);
  }
})();

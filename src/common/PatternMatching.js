const Match = (value, done) => ({
  when: (p, r) => {
    if (done) {
      return Match(value, done);
    }
    const passed = typeof p === 'function'
      ? p(value)
      : p === value;
    const resolve = typeof r === 'function'
      ? () => r(value)
      : () => r;
    return Match(passed ? resolve() : value, passed);
  },
  orElse: (other) => {
    if (done) {
      return value;
    }
    return other;
  },
  orElseGet: (supplier) => {
    if (typeof supplier !== 'function') {
      throw Error('supplier should be a function');
    }
    if (done) {
      return value;
    }
    return supplier();
  }
});

export default Match;
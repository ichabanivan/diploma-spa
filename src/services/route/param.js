
// outsource dependencies
import { isFunction, isString, isUndefined, isEqual } from 'lodash';

// local dependencies

export default class Param {
    static create = options => new Param(options);

    constructor (options) {
      this.applyValidOptions(options);
    }

    applyValidOptions = options => {
      this.name = isString(options.name) ? options.name : 'unknown_field_name';
      this.short = isString(options.short) ? options.short : this.name;
      this.defaults = !isUndefined(options.defaults) ? options.defaults : void(0);
      this.isValid = isFunction(options.isValid) ? options.isValid : this.isValid;
      this.archive = isFunction(options.archive) ? options.archive : this.archive;
      this.extract = isFunction(options.extract) ? options.extract : this.extract;
    };

    archive = v => v;

    extract = v => v;

    isValid = v => Boolean(v);

    to = (data, store) => {
      const value = this.archive(data[this.name]);
      const def = this.archive(this.defaults);
      if (this.isValid(value) && !isEqual(value, def)) {
        store[this.short] = value;
      }
    };

    from = (data, store) => {
      const def = this.extract(this.defaults);
      const value = this.extract(data[this.short]);
      store[this.name] = this.isValid(value) ? value : def;
    };
}

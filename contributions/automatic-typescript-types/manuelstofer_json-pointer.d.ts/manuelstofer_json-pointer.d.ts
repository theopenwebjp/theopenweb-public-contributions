declare function index(obj: any, pointer: any, value: any, ...args: any[]): any;


declare namespace index {
    function compile(refTokens: any): any;

    function dict(obj: any, descend: any): any;

    function escape(str: any): any;

    function get(obj: any, pointer: any): any;

    function has(obj: any, pointer: any): any;

    function parse(pointer: any): any;

    function remove(obj: any, pointer: any): void;

    function set(obj: any, pointer: any, value: any): any;

    function unescape(str: any): any;

    function walk(obj: any, iterator: any, descend: any): any;

}




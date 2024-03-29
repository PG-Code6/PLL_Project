(function(doc){
    var scriptElm = doc.scripts[doc.scripts.length - 1];
    var warn = ['[ionicons] Deprecated script, please remove: ' + scriptElm.outerHTML];

    warn.push('To improve performance it is recommended to set the differential scripts in the head as follows:')

    var parts = scriptElm.src.split('/');
    parts.pop();
    parts.push('ionicons');
    var url = parts.join('/');

    var scriptElm1 = doc.createElement('script');
    scriptElm1.setAttribute('type', 'module');
    scriptElm1.src = url + '/ionicons.esm.js';
    warn.push(scriptElm1.outerHTML);
    scriptElm1.setAttribute('data-stencil-namespace', 'ionicons');
    doc.head.appendChild(scriptElm1);


    scriptElm = doc.createElement('script');
    scriptElm.setAttribute('nomodule', '');
    scriptElm.src = url + '/ionicons.js';
    warn.push(scriptElm.outerHTML);
    scriptElm.setAttribute('data-stencil-namespace', 'ionicons');
    doc.head.appendChild(scriptElm)

    console.warn(warn.join('\n'));

})(document);
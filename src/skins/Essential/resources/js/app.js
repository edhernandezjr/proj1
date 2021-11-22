/* eslint-disable */
$( 'textarea' ).each( function ( i, el ) {
	var el = $( this ), id = 'quilleditor-' + i, val = el.val(), editor_height = 200,
		div = $( '<div>' ).attr( 'id', id ).css( 'height', editor_height + 'px' ).html( val );
	el.addClass( 'hidden' );
	el.parent().prepend( div );
	console.log( el );
	var quill = new Quill( '#' + id, {
		modules: { 
            toolbar: true,
            // 'image-tooltip': true,
            // 'link-tooltip': true,
        },
		theme: 'snow'
	} );
	quill.on( 'text-change', function () {
		console.log( 'getContents', quill.getContents() );
		console.log( 'innerHTML', quill.container.firstChild.innerHTML );
		// $( el ).val(quill.container.firstChild.innerHTML );
        el.html(quill.container.firstChild.innerHTML);
        // console.log($( el )e.val);
	} );

    quill.clipboard.addMatcher('a', function(node, delta) {
        console.log('node', node);
        // return delta.compose(new Delta().retain(delta.length(), { bold: true }));
    });
} );

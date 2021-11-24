/* eslint-disable */
$( 'textarea' ).each( function ( i, el ) {
	var el = $( this ), id = 'quilleditor-' + i, val = el.val(), editor_height = 200,
		div = $( '<div>' ).attr( 'id', id ).css( 'height', editor_height + 'px' ).html( val );
	el.addClass( 'hidden' );
	el.parent().prepend( div );
	var quill = new Quill( '#' + id, {
		modules: { 
            toolbar: true,
        },
		theme: 'snow'
	} );
	quill.on( 'text-change', function () {
		// TODO: Sanitize and convert to mediawiki markdown
        el.html(quill.container.firstChild.innerHTML);
	} );
});

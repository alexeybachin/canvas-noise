const renderStaticNoise = () => {

    var canvas = document.getElementById( 'canvas' ),
      ctx = canvas.getContext( '2d' );

    var resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.onresize = resize;

    var generateNoise = ( ctx ) => {

      var w = ctx.canvas.width,
        h = ctx.canvas.height,
        idata = ctx.createImageData( w, h ),
        buffer32 = new Uint32Array( idata.data.buffer ),
        length = buffer32.length,
        i = 0;

      for( ; i < length; )
        buffer32[i++] = ( (128 * Math.random() ) | 0 ) << 24;

      ctx.putImageData( idata, 0, 0 );

    };

    var toggle = true;

    ( function loop () {
      toggle = !toggle;
      if ( toggle ) {
        requestAnimationFrame( loop );
        return;
      }
      generateNoise( ctx );
      requestAnimationFrame( loop );
    })();
    
    };

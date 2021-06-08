/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

    console.log("Hello, world!");

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    
    const rendered = new THREE.WebGLRenderer();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    
    const geometry = new Three.BoxGeometry(2, 2, 2);
    
    const material = new Three.MeshBasicMaterial( {color: 0x0000ff} );
    scene.add( cube );
    
    camera.position.z = 5;
    
    function animate() {
      requestAnimationFrame(animate);
      rendere.render(scene, camera)
      
    }
    

    
    
    
    
import React from 'react';
import * as THREE from 'three.js';

export const three = (id) => {
    var scene = new THREE.Scene();  
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); 

    const canvas = document.getElementById(`${id}`);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setClearColor(0Xffffff, 1);

    // var geometry = new THREE.BoxGeometry( id, id, id );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
    var cube = new THREE.Mesh( geometry, material );
    cube.rotation.z = Math.PI / 3;
    scene.add( cube );

    camera.position.z = 5;

    //Create an render loop to allow animation
    var animate = function () {
        requestAnimationFrame( animate );

        // cube.rotation.x += 0.01;
        cube.rotation.y += 0.05;

        renderer.render(scene, camera);
    };

    animate();
};

export const Canvas = () => {
    return (
        <canvas id='canvas' style={{position: 'absolute', width: '500px', height: '500px', top: '200px', left: '200px', boxShadow: '0px 0px 45px 0px rgba(0,0,0,0.75)'}}></canvas>
    );
};
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

interface PartcleProps {
  bgColor: string;
  particleColor: string | string[];
  shouldEnableLinks: boolean;
  linkColor: string;
  onHoverInteractivity: boolean;
  minParticleSize: number;
  maxParticleSize: number;
  density: number;
}

function Particle({
  bgColor,
  particleColor,
  shouldEnableLinks,
  linkColor,
  onHoverInteractivity,
  minParticleSize,
  maxParticleSize,
  density,
}: PartcleProps) {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: bgColor,
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: onHoverInteractivity,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 75,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: particleColor,
          },
          links: {
            color: linkColor,
            distance: 80,
            enable: shouldEnableLinks,
            opacity: 0.75,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: density,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: minParticleSize, max: maxParticleSize },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;

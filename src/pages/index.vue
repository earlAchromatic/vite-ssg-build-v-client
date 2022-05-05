<template>
  <div id="3d-graph"></div>
</template>

<script setup>

onMounted(async ()=>{
  if (typeof window !== 'undefined') {
    let ForceGraph3D = (await import("3d-force-graph/dist/3d-force-graph.module")).default

    //This just creates graph data for the 3d-force-graph lib to use
    const N = 300;
      const gData = {
        nodes: [...Array(N).keys()].map(i => ({ id: i })),
        links: [...Array(N).keys()]
          .filter(id => id)
          .map(id => ({
            source: id,
            target: Math.round(Math.random() * (id-1))
          }))
      };

    const Graph = ForceGraph3D()
      (document.getElementById('3d-graph'))
        .graphData(gData);
  }
})
</script>
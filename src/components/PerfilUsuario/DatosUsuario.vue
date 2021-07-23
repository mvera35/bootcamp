<template>
	<div>
		<v-img
			v-bind:height="imgSize"
			width="100%"
			src="https://picsum.photos/id/11/500/300"
		>
		</v-img>
		<div class="icon">
			<div class="button">
				<Editar />
			</div>
			<v-avatar color="indigo" size="150"
				><img
					alt="user"
					src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
				/>
			</v-avatar>
			<h1>Nombre de usuario</h1>
			<h2>Especialidad</h2>
		</div>
	</div>
</template>

<script>
import Editar from "@/components/Buttons/Editar";

export default {
	name: "DatosUsuario",
	props: { size: String },
	data() {
		return { imgSize: this.size };
	},
	components: {
		Editar,
	},
};
</script>

<style scoped>
.icon {
	margin-top: -75px;
	padding-bottom: 10%;
	position: relative;
}

.button {
	position: absolute;
	right: 8%;
	margin-top: 70px;
}
</style>

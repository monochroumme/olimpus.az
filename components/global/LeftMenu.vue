<template>
	<div class="left-menu">
		<ul>
			<li v-for="(section, i) in sections" :key="i">
				<a :href="`#${section.id}`" :class="{ active : section.id == activeSectionId }" @click.prevent="scrollTo(section.id)">{{ section.title }}</a>
			</li>
		</ul>
		<GoToTop />
	</div>
</template>

<script>
	import GoToTop from '~/components/global/GoToTop';

	export default {
		data() {
			return {
				active: -1,
				activeSectionId: '#',
	            margin: 300,
	            atTop: true
			}
		},

		components: {
			GoToTop
		},

		computed: {
			sections() {
				return this.$store.state.mainSections;
			}
		},

		mounted () {
	        window.addEventListener('scroll', this.onScroll, false);
	        window.addEventListener('scroll', this.onResize, false);
	        this.onResize();
	        this.onScroll();
	    },

	    methods: {
	        onScroll() {
	            let bounding;
                for (let i = 0; i < this.sections.length; i++) {
                    if (document.querySelector(`#${this.sections[i].id}`)) {
                        bounding = document.querySelector(`#${this.sections[i].id}`).getBoundingClientRect();
                        if (bounding.top <= this.margin && bounding.bottom >= this.margin)
                                this.activeSectionId = this.sections[i].id;
                    }
                }

	            if (window.scrollY > 10) {
	                this.atTop = false;
	            } else this.atTop = true;
	        },

	        onResize() {
	            if (window.innerWidth > 500)
	                this.margin = 300;
	            else this.margin = 200;

	            this.onScroll();
	        },

	        scrollTo(id) {
	        	if (document.querySelector(`#${id}`)) {
					this.$router.push(`#${id}`);
					return window.scrollTo({ top: document.querySelector(`#${id}`).offsetTop + (window.innerWidth <= 500 ? 120 : 80), behavior: 'smooth' });
			  	} else return window.scrollTo({ top: 0, behavior: 'smooth' });
	        }
	    }
	}
</script>

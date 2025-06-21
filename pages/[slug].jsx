import pb from "@/src/lib/pocketbase";

export const getServerSideProps = async (ctx) => {
	const { slug } = ctx.params ?? {};

	if (!slug || Array.isArray(slug)) {
		return { notFound: true };
	}

	try {
		const link = await pb
			.collection("redirect_urls")
			.getFirstListItem(`url_slug='${slug}'`);

		if (!link) {
			return { notFound: true };
		}

		return {
			redirect: {
				destination: link.destination,
				permanent: false,
			},
		};
	} catch (e) {
		console.error("redirect error:", e);
		return { notFound: true };
	}
};

export default function LinkPage() {
	return null;
}

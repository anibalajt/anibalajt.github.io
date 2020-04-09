import axios from "axios";

const instagramRegExp = new RegExp(
  /<script type="text\/javascript">window\._sharedData = (.*);<\/script>/
);
const fetchInstagramPhotos = async (accountUrl) => {
  const response = await axios.get(accountUrl);
  const json = JSON.parse(response.data.match(instagramRegExp)[1]);
  // console.log("edges :", json.entry_data.ProfilePage);
  const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
    0,
    9
  );
  // console.log("edges :", edges);
  const photos = edges.map(({ node }) => {
    console.log('node :', node);
    // console.log("node.shortcode :", node.shortcode);
    return {
      url: `https://www.instagram.com/p/${node.shortcode}/`,
      thumbnailUrl: node.thumbnail_src,
      displayUrl: node.display_url,
      caption:
        node.edge_media_to_caption.edges.length > 0
          ? node.edge_media_to_caption.edges[0].node.text
          : "",
      children: node.edge_sidecar_to_children
        ? [
            node.edge_sidecar_to_children.edges.map(
              ({ node }) => node.display_url
            ),
          ]
        : false,
    };
  });
  // console.log("photos :", photos);
  return photos;
};
export default async (Username_instagram) => {
  try {
    console.log(`https://www.instagram.com/${Username_instagram}/`);
    return await fetchInstagramPhotos(
      `https://www.instagram.com/${Username_instagram}/`
    );
    // Do something with the photos
  } catch (e) {
    console.error("Fetching Instagram photos failed", e);
    return false;
  }
};

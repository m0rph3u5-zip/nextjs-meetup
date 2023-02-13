export default async function handler(req, res) {
  try {
    const urlToRevalidate = req.body.url;
    urlToRevalidate && (await res.revalidate(urlToRevalidate));
    return res.json({ revalidated: true, revalidatedUrl: urlToRevalidate });
  } catch (err) {
    return res.status(500).send({ message: 'Error revalidating', error: err });
  }
}

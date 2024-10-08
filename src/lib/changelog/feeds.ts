import { ChangelogEntry, ChangelogEntryList } from '@lib/changelog/types';
import { getChangelogEntryUrl } from '@lib/utils';
import { Feed } from 'feed';

const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL ? process.env.NEXT_PUBLIC_PUBLIC_URL : '';

export function CreateFeed(changelogEntryList: ChangelogEntryList<Array<ChangelogEntry>>): Feed {
  const feed = new Feed({
    title: 'Sitecore Changelog',
    description: 'Learn more about new versions, changes and improvements!',
    id: `${publicUrl}/changelog`,
    link: `${publicUrl}/changelog`,
    language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: `${publicUrl}/image.png`,
    favicon: `${publicUrl}/favicon.ico`,
    copyright: 'All rights reserved 2024, Sitecore',
    generator: 'Feed for Node.js',
    author: {
      name: 'Sitecore',
      email: 'no-reply@sitecore.com',
      link: publicUrl,
    },
  });

  changelogEntryList.entries.forEach((changelogEntry: ChangelogEntry) => {
    feed.addItem({
      guid: changelogEntry.id,
      title: changelogEntry.title,
      description: changelogEntry.description,
      content: changelogEntry.fullArticle ? changelogEntry.fullArticle : '',
      link: `${publicUrl}/${getChangelogEntryUrl(changelogEntry)}`,
      date: new Date(changelogEntry.releaseDate),
      image: changelogEntry.image.length > 0 ? changelogEntry.image[0].fileUrl.concat('?transform=true') : '',
    });
  });

  return feed;
}

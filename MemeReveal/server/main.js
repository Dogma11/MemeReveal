import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { MessagesCollection } from '/imports/api/messages';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}
function insertMessage({ content, user }) {
  MessagesCollection.insert({content, user});
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    });

    insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com'
    });

    insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com'
    });

    insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com'
    });
  }
  if (MessagesCollection.find().count() === 0) {
    insertMessage({
      content: 'Coucou',
      user: 1,
    });

    insertMessage({
      content: 'Coucou',
      user: 2,
    });

    insertMessage({
      content: 'ça va ?',
      user: 1,
    });

    insertMessage({
      content: 'oui',
      user: 2,
    });
  }
});

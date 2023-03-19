import {} from './friendslist.css';

export function FriendsList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => {
        const getOnlineStatus = friend => {
          switch (friend.isOnline) {
            case true:
              return 'red';
            case false:
              return 'green';
          }
        };
        return (
          <li class="friend-item">
            <span
              class="friend-status"
              style={{ backgroundColor: getOnlineStatus(friend) }}
            ></span>
            <img
              class="friend-avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p class="friend-name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

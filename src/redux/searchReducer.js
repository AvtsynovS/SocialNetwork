const SET_USERS = 'SET_USERS';
const TOGGLE_SUBSCRIBE = 'TOGGLE_SUBSCRIBE';
const SHOW_MORE = 'SHOW_MORE';

let initialState = {
  users: [
    {
      id: 1,
      name: 'Alex',
      secondName: 'Megos',
      avatar:
        'https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg',
      subscribe: true,
    },
    {
      id: 2,
      name: 'Ann',
      secondName: 'Willson',
      avatar:
        'https://anime-fans.ru/wp-content/uploads/2021/04/Skachat-milye-kartinki-anime-na-avu_19.jpg',
      subscribe: false,
    },
    {
      id: 3,
      name: 'Jack',
      secondName: 'London',
      avatar:
        'https://www.meme-arsenal.com/memes/90bc67357ee4ac90b42daa287119ace2.jpg',
      subscribe: false,
    },
    {
      id: 4,
      name: 'Thomas',
      secondName: 'Katcher',
      avatar:
        'https://cdn.pixabay.com/photo/2016/01/19/17/57/car-1149997_960_720.jpg',
      subscribe: false,
    },
    {
      id: 5,
      name: 'Jessica',
      secondName: 'Phils',
      avatar:
        'https://goodwall.ru/image/picture/1204-1280x960-fbb72d1c78b3ee11e97c6ef2729b26ae.jpg',
      subscribe: true,
    },
    {
      id: 6,
      name: 'Mia',
      secondName: 'Li',
      avatar:
        'https://img2.akspic.ru/originals/1/5/9/5/4/145951-anime-zvukovoe_oborudovanie-krasnyj_cvet-multfilm-art-1920x1080.jpg',
      subscribe: true,
    },
  ],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SUBSCRIBE:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, subscribe: !user.subscribe };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const toggleSubscribe = (userId) => ({ type: TOGGLE_SUBSCRIBE, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const showMore = () => ({ type: SHOW_MORE });

export default searchReducer;

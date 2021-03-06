import { ApiData } from '../models/apiData';
import { User } from '../models/user';
export const mockUsers: User[] = [
	{
		'id': 1,
		'email': 'george.bluth@reqres.in',
		'firstName': 'George',
		'lastName': 'Bluth',
		'avatar': 'https://reqres.in/img/faces/1-image.jpg',
		'following': [
			{
				'id':2,
				'email':'janet.weaver@reqres.in',
				'firstName':'Janet',
				'lastName':'Weaver',
				'avatar':'https://reqres.in/img/faces/2-image.jpg'
			},
			{
				'id':3,
				'email':'emma.wong@reqres.in',
				'firstName':'Emma',
				'lastName':'Wong',
				'avatar':'https://reqres.in/img/faces/3-image.jpg'
			}
		],
		'posts': [
			{
				"date": new Date("2021-02-28T21:00:59.680Z"),
				"text": "Hola texto"
			}
		]
	},
	{
		'id':2,
		'email':'janet.weaver@reqres.in',
		'firstName':'Janet',
		'lastName':'Weaver',
		'avatar':'https://reqres.in/img/faces/2-image.jpg'
	},
	{
		'id':3,
		'email':'emma.wong@reqres.in',
		'firstName':'Emma',
		'lastName':'Wong',
		'avatar':'https://reqres.in/img/faces/3-image.jpg'
	},
	{
		'id':4,
		'email':'eve.holt@reqres.in',
		'firstName':'Eve',
		'lastName':'Holt',
		'avatar':'https://reqres.in/img/faces/4-image.jpg'
	},
	{
		'id':5,
		'email':'charles.morris@reqres.in',
		'firstName':'Charles',
		'lastName':'Morris',
		'avatar':'https://reqres.in/img/faces/5-image.jpg'
	},
	{
		'id':6,
		'email':'tracey.ramos@reqres.in',
		'firstName':'Tracey',
		'lastName':'Ramos',
		'avatar':'https://reqres.in/img/faces/6-image.jpg'
	}
];

export const mockApiResponse: ApiData = {
	'page': 1,
	'per_page': 6,
	'total': 12,
	'total_pages': 2,
	'data': mockUsers
};

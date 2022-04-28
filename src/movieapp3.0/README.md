# Project Map

| Project Name | Description |
| ----------- | ----------- |
|GithubUser APP | Title |
|BingMap APP | Text |
|Movie APP  | text   |



## Movie APP 
### Project Plan
1. constrcut the API structure with off-line movie list data; two component: search and movie list
2. set up Movie Detai page with useEffect and search. data:id.
4. fetch serch results dynamically

### TimeLine
#### update: 5/18
1. the movie detail page only share single movie ID with APP, so I put it seperately. when you fetch and update movie data, the data only can be seen with this component.
2.  
    ```sh
    const [mldata, setMList] = useState(null); // movielist data
    const [ID, setID] =useState('tt0381681'); // single movie id
    const [SearchText, setSearchText] = useState('sunset'); // search text
    ```

    those are the three state I put at APP level. 
    SearchText is send up by SearchIputBox, and will be used to make a new fetch, which will update the movielist data.
    the movielist data will be used to generate a new movie list.
    when you click items on the movie list, the onClick will send that movie's ID to app, which will be passed to movie detail component to re-render that page.
3. to do:
    - add the onClick events
    - change app view layout.
    - router
    - infinit roll

#### update:5/19
1.Connect SearchInputBox and MovieList. Add onSubmit event on SearchInputBox: you pass the setSearchText to that component, and capture text change;when submit, searchText is updated, and APP will fetch new mldata, which will cause re-render of movie list.
2.Connect MovieList and MovieDetail. as this part use ant design List, the way to add a onClick event is a little bit different. You need wrap onClick by <a(herf)>.

#### update: 5/21
1. wrap movielist and fetch movie list in an seperate file.
2. add useContext for shared variables as MovieProvider; wrap it with a custom hook as useMovie.
3. to do: add router so movie detail render in a 'seperate' page. add infinite roll for movie list.
4. my questions: currently, my data and ui are in the same file. how to refine this part?



#### update:5/23
Add router: with useRoutes and useNavigate. There there are two endpoints: page Home and page Movie.
to do: now URL for all movies show in detail page is the same. try to change this to url.../movie/id  so that when user type the address with id, they can see that page directly.   Doing this way, fetch-movie-detail component all need do change its way using 'id' variable. 


#### update:5/24
Fix the movie detai page routing with useParams.(see detail in Routing Parameters at Page265)
To be fixed: nesting routes with useRoutes

#### update:5/28
refactoring the GithubUser App with React Hooks.


### To do Refactor the color list app with Reduex


### react coun't resolve history
https://stackoverflow.com/questions/45817017/module-not-found-error-cant-resolve-history-in-types-history

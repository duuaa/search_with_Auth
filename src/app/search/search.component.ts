import { Post } from './../store/reducers/posts.reducer';
import { Component, HostListener, OnInit, Query } from '@angular/core';

import { Store } from '@ngrx/store';
import { StoreInterface } from '../store/store';
import { LoadPostsAction} from '../store/actions/post.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  query: string;
  artists: StoreInterface;
  currentArtist: Post;
  entercond:boolean=false;
  listcond :boolean=true;
 
  results:string;
  pagecond:boolean;
  pagelistcond:boolean;

  @HostListener ('window:keyup.enter',['$event'])

  onkeyenter(event){
  this.entercond=true;
  // this.listcond=false;
  this.results=this.query;
  this.pagelistcond=true;
  if(this.pagecond){
    this.pagecond=false;
  }
  
  

  }
  constructor(private store: Store<StoreInterface>) {
   
  }
 
  showArtist(item) {
    this.query = item.title;
    this.currentArtist = item;
    this.results="";
    this.entercond=false;
    this.pagecond=true;
    this.pagelistcond=false;
  
  }

  ngOnInit(): void {
    
    this.query = '';
    this.store.dispatch(new LoadPostsAction());
    this.store.subscribe(data => this.artists = data);

  }

 
    
}

  
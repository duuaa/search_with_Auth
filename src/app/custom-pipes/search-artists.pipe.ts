import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {
    return pipeData.filter(eachItem => {
      return (
        eachItem['title'].toLowerCase().includes(pipeModifier.toLowerCase())

      )
    });
  }

}

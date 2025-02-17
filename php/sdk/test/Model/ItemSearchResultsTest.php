<?php
/**
 * ItemSearchResultsTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\catalogItems\v2022_04_01\ItemSearchResults;

/**
 * ItemSearchResultsTest Class Doc Comment
 *
 * @category    Class
 * @description Items in the Amazon catalog and search related metadata.
 * @package     SpApi
 */
class ItemSearchResultsTest extends TestCase
{

    private ItemSearchResults $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemSearchResults();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemSearchResults"
     */
    public function testItemSearchResults()
    {
        $this->assertInstanceOf(ItemSearchResults::class, $this->model);
    }

    /**
     * Test attribute "number_of_results"
     */
    public function testPropertyNumberOfResults()
    {
        $testValue = 123;
        
        $this->model->setNumberOfResults($testValue);
        $this->assertEquals($testValue, $this->model->getNumberOfResults());
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \SpApi\Model\catalogItems\v2022_04_01\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }

    /**
     * Test attribute "refinements"
     */
    public function testPropertyRefinements()
    {
        
        $testValue = new \SpApi\Model\catalogItems\v2022_04_01\Refinements();
        
        $this->model->setRefinements($testValue);
        $this->assertEquals($testValue, $this->model->getRefinements());
    }

    /**
     * Test attribute "items"
     */
    public function testPropertyItems()
    {
        $testValue = [];
        
        $this->model->setItems($testValue);
        $this->assertEquals($testValue, $this->model->getItems());
    }
}

<?php
/**
 * BrandRefinementTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\catalogItems\v2022_04_01\BrandRefinement;

/**
 * BrandRefinementTest Class Doc Comment
 *
 * @category    Class
 * @description Description of a brand that can be used to get more fine-grained search results.
 * @package     OpenAPI\Client
 */
class BrandRefinementTest extends TestCase
{

    private BrandRefinement $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BrandRefinement();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BrandRefinement"
     */
    public function testBrandRefinement()
    {
        $this->assertInstanceOf(BrandRefinement::class, $this->model);
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
     * Test attribute "brand_name"
     */
    public function testPropertyBrandName()
    {
        $testValue = 'test';
        
        $this->model->setBrandName($testValue);
        $this->assertEquals($testValue, $this->model->getBrandName());
    }
}

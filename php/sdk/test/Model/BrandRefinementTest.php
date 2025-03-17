<?php
/**
 * BrandRefinementTest
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
use SpApi\Model\catalogItems\v2022_04_01\BrandRefinement;

/**
 * BrandRefinementTest Class Doc Comment
 *
 * @category    Class
 * @description A brand that you can use to refine your search.
 * @package     SpApi
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

<?php
/**
 * SalesRankTypeTest
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
use OpenAPI\Client\Model\pricing\v0\SalesRankType;

/**
 * SalesRankTypeTest Class Doc Comment
 *
 * @category    Class
 * @description SalesRankType
 * @package     OpenAPI\Client
 */
class SalesRankTypeTest extends TestCase
{

    private SalesRankType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SalesRankType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SalesRankType"
     */
    public function testSalesRankType()
    {
        $this->assertInstanceOf(SalesRankType::class, $this->model);
    }

    /**
     * Test attribute "product_category_id"
     */
    public function testPropertyProductCategoryId()
    {
        $testValue = 'test';
        
        $this->model->setProductCategoryId($testValue);
        $this->assertEquals($testValue, $this->model->getProductCategoryId());
    }

    /**
     * Test attribute "rank"
     */
    public function testPropertyRank()
    {
        $testValue = 123;
        
        $this->model->setRank($testValue);
        $this->assertEquals($testValue, $this->model->getRank());
    }
}

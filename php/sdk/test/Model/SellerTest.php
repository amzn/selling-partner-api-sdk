<?php
/**
 * SellerTest
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
use SpApi\Model\services\v1\Seller;

/**
 * SellerTest Class Doc Comment
 *
 * @category    Class
 * @description Information about the seller of the service job.
 * @package     SpApi
 */
class SellerTest extends TestCase
{

    private Seller $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Seller();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Seller"
     */
    public function testSeller()
    {
        $this->assertInstanceOf(Seller::class, $this->model);
    }

    /**
     * Test attribute "seller_id"
     */
    public function testPropertySellerId()
    {
        $testValue = 'test';
        
        $this->model->setSellerId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerId());
    }
}

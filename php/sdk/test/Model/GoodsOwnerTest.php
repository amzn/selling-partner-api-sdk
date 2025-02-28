<?php
/**
 * GoodsOwnerTest
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
use SpApi\Model\shipping\v2\GoodsOwner;

/**
 * GoodsOwnerTest Class Doc Comment
 *
 * @category    Class
 * @description The seller owning the goods before handing them over to the carrier
 * @package     SpApi
 */
class GoodsOwnerTest extends TestCase
{

    private GoodsOwner $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GoodsOwner();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GoodsOwner"
     */
    public function testGoodsOwner()
    {
        $this->assertInstanceOf(GoodsOwner::class, $this->model);
    }

    /**
     * Test attribute "merchant_id"
     */
    public function testPropertyMerchantId()
    {
        $testValue = 'test';
        
        $this->model->setMerchantId($testValue);
        $this->assertEquals($testValue, $this->model->getMerchantId());
    }
}

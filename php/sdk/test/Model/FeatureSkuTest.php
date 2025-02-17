<?php
/**
 * FeatureSkuTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\FeatureSku;

/**
 * FeatureSkuTest Class Doc Comment
 *
 * @category    Class
 * @description Information about an SKU, including the count available, identifiers, and a list of overlapping SKUs that share the same inventory pool.
 * @package     SpApi
 */
class FeatureSkuTest extends TestCase
{

    private FeatureSku $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeatureSku();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeatureSku"
     */
    public function testFeatureSku()
    {
        $this->assertInstanceOf(FeatureSku::class, $this->model);
    }

    /**
     * Test attribute "seller_sku"
     */
    public function testPropertySellerSku()
    {
        $testValue = 'test';
        
        $this->model->setSellerSku($testValue);
        $this->assertEquals($testValue, $this->model->getSellerSku());
    }

    /**
     * Test attribute "fn_sku"
     */
    public function testPropertyFnSku()
    {
        $testValue = 'test';
        
        $this->model->setFnSku($testValue);
        $this->assertEquals($testValue, $this->model->getFnSku());
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "sku_count"
     */
    public function testPropertySkuCount()
    {
        $testValue = 1;
        
        $this->model->setSkuCount($testValue);
        $this->assertEquals($testValue, $this->model->getSkuCount());
    }

    /**
     * Test attribute "overlapping_skus"
     */
    public function testPropertyOverlappingSkus()
    {
        $testValue = [];
        
        $this->model->setOverlappingSkus($testValue);
        $this->assertEquals($testValue, $this->model->getOverlappingSkus());
    }
}

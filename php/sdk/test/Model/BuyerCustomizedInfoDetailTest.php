<?php
/**
 * BuyerCustomizedInfoDetailTest
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
use OpenAPI\Client\Model\orders\v0\BuyerCustomizedInfoDetail;

/**
 * BuyerCustomizedInfoDetailTest Class Doc Comment
 *
 * @category    Class
 * @description Buyer information for custom orders from the Amazon Custom program.
 * @package     OpenAPI\Client
 */
class BuyerCustomizedInfoDetailTest extends TestCase
{

    private BuyerCustomizedInfoDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BuyerCustomizedInfoDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BuyerCustomizedInfoDetail"
     */
    public function testBuyerCustomizedInfoDetail()
    {
        $this->assertInstanceOf(BuyerCustomizedInfoDetail::class, $this->model);
    }

    /**
     * Test attribute "customized_url"
     */
    public function testPropertyCustomizedUrl()
    {
        $testValue = 'test';
        
        $this->model->setCustomizedUrl($testValue);
        $this->assertEquals($testValue, $this->model->getCustomizedUrl());
    }
}

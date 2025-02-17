<?php
/**
 * BillOfLadingDownloadURLTest
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
use SpApi\Model\fulfillment\inbound\v0\BillOfLadingDownloadURL;

/**
 * BillOfLadingDownloadURLTest Class Doc Comment
 *
 * @category    Class
 * @description Download URL for the bill of lading.
 * @package     SpApi
 */
class BillOfLadingDownloadURLTest extends TestCase
{

    private BillOfLadingDownloadURL $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BillOfLadingDownloadURL();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BillOfLadingDownloadURL"
     */
    public function testBillOfLadingDownloadURL()
    {
        $this->assertInstanceOf(BillOfLadingDownloadURL::class, $this->model);
    }

    /**
     * Test attribute "download_url"
     */
    public function testPropertyDownloadUrl()
    {
        $testValue = 'test';
        
        $this->model->setDownloadUrl($testValue);
        $this->assertEquals($testValue, $this->model->getDownloadUrl());
    }
}

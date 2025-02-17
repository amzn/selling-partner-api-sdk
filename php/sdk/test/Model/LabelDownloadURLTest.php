<?php
/**
 * LabelDownloadURLTest
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
use SpApi\Model\fulfillment\inbound\v0\LabelDownloadURL;

/**
 * LabelDownloadURLTest Class Doc Comment
 *
 * @category    Class
 * @description Download URL for a label
 * @package     SpApi
 */
class LabelDownloadURLTest extends TestCase
{

    private LabelDownloadURL $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LabelDownloadURL();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LabelDownloadURL"
     */
    public function testLabelDownloadURL()
    {
        $this->assertInstanceOf(LabelDownloadURL::class, $this->model);
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

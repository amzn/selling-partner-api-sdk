<?php
/**
 * ContentUpdatePreviewTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ContentUpdatePreview;

/**
 * ContentUpdatePreviewTest Class Doc Comment
 *
 * @category    Class
 * @description Preview of the changes that will be applied to the shipment.
 * @package     OpenAPI\Client
 */
class ContentUpdatePreviewTest extends TestCase
{

    private ContentUpdatePreview $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContentUpdatePreview();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContentUpdatePreview"
     */
    public function testContentUpdatePreview()
    {
        $this->assertInstanceOf(ContentUpdatePreview::class, $this->model);
    }

    /**
     * Test attribute "content_update_preview_id"
     */
    public function testPropertyContentUpdatePreviewId()
    {
        $testValue = 'test';
        
        $this->model->setContentUpdatePreviewId($testValue);
        $this->assertEquals($testValue, $this->model->getContentUpdatePreviewId());
    }

    /**
     * Test attribute "expiration"
     */
    public function testPropertyExpiration()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setExpiration($testValue);
        $this->assertEquals($testValue, $this->model->getExpiration());
    }

    /**
     * Test attribute "requested_updates"
     */
    public function testPropertyRequestedUpdates()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\RequestedUpdates();
        
        $this->model->setRequestedUpdates($testValue);
        $this->assertEquals($testValue, $this->model->getRequestedUpdates());
    }

    /**
     * Test attribute "transportation_option"
     */
    public function testPropertyTransportationOption()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\TransportationOption();
        
        $this->model->setTransportationOption($testValue);
        $this->assertEquals($testValue, $this->model->getTransportationOption());
    }
}

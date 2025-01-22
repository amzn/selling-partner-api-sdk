<?php
/**
 * LabelPrepPreferenceTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\LabelPrepPreference;

/**
 * LabelPrepPreferenceTest Class Doc Comment
 *
 * @category    Class
 * @description The preference for label preparation for an inbound shipment.
 * @package     OpenAPI\Client
 */
class LabelPrepPreferenceTest extends TestCase
{

    private LabelPrepPreference $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LabelPrepPreference();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LabelPrepPreference"
     */
    public function testLabelPrepPreference()
    {
        $this->assertInstanceOf(LabelPrepPreference::class, $this->model);
    }
}

<?php
/**
 * BoxContentInformationSourceTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentInbound\BoxContentInformationSource;

/**
 * BoxContentInformationSourceTest Class Doc Comment
 *
 * @category    Class
 * @description Indication of how box content is meant to be provided.
 * @package     OpenAPI\Client
 */
class BoxContentInformationSourceTest extends TestCase
{

    private BoxContentInformationSource $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BoxContentInformationSource();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BoxContentInformationSource"
     */
    public function testBoxContentInformationSource()
    {
        $this->assertInstanceOf(BoxContentInformationSource::class, $this->model);
    }
}
